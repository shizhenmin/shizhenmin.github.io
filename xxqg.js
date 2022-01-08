function choose_ans(button) {
    // 答题
    user_ans = button.getAttribute("value")  //获取按钮的值
    console.log("user_ans\t", user_ans)
    if (user_ans == ans){
        console.log("回答正确")
        // setTimeout(() => {set_right(button)}, 100);
        set_right(button)
        console.log("all_time:\t", timu_list[index].all_time)
        console.log("right_time:\t", timu_list[index].right_time)
        setTimeout(() => {update()}, 500);  // 答对后开始新的题
        // update()
    }else{
        console.log("回答错误")
        // setTimeout(() => {set_wrong(button)}, 100);
        set_wrong(button)  // 答错变红
    }
}

function set_right(button){
    // 答对后选项变绿
    button.style.backgroundColor="#3ed091"
    button.style.color='white'
    timu_list[index].all_time+=1
    if(wrong_flag == 0){
        timu_list[index].right_time+=1
        timu_list[index].update_accuracy()
    }else{
        wrong_flag = 0
        timu_list[index].update_accuracy()
    }
}

function set_wrong(button){
    // 答错后选项变红
    button.style.backgroundColor="#f44f77"
    button.style.color='white'
    wrong_flag = 1
}


timu_list = []
ans = ''
order = []
times = 0
index = times
wrong_flag = 0
color_flag = true

function main(){
    // 主程序
    // 读取输入文件
    const input = document.querySelector('input[type=file]')
    input.addEventListener('change', ()=>{
      const reader = new FileReader()
      reader.readAsText(input.files[0],'utf8') // input.files[0]为第一个文件
      reader.onload = ()=>{
        // document.body.innerHTML += reader.result  // reader.result为获取结果
        // 读取、分析文件
        parse_txt(reader.result)
        // document.getElementById('input').style.display = "none"
        by_random()
        // by_accuracy()
        // by_order()
        // update()
      }
    }, false)
}


function parse_txt(content){
    timu_list = []
    let code = content.split(/\n/); // 根据换行或者回车进行识别
    var number = 0 // 题号
    var i = 0 // 第几个选项
    var tigan = ''
    var options = []
    var ans = ''
    code.forEach((line, index) => {
        let item = line.split(/\t/)
        // console.log("item", item)
        str = item[0].replace(/^\s*/,"");
        // console.log("item[0]", str)
        if(str == number){ // 还是同一题
            options.push(item[2])
            if(item[1] == 1){
                ans = i
                right_time = Number(item[3])
            }
            i++
        }else{ // 新的题目
            // console.log("new timu")
            // console.log("str", str, "number", number)
            if(number != 0){
                accuracy = right_time / all_time
                var timu=new Timu(tigan, options, ans, all_time, right_time, accuracy, number);
                timu_list.push(timu)
                // console.log(timu)
            }
            number = str
            i = 0
            tigan = item[2]
            options = []
            times = 0
            all_time = Number(item[3])
        }
    })
    // 补上最后一题
    accuracy = right_time / all_time
    var timu=new Timu(tigan, options, ans, all_time, right_time, accuracy, number);
    timu_list.push(timu)
    // console.log(timu)
}


function test(){
    // 用于测试
    document.getElementById("tigan").innerHTML = '《中华人民共和国社会保险法》第十四条规定，养老保险个人账户不得提前支取，记账利率不得低于银行定期存款利率，免征利息税。个人死亡的，个人账户余额【    】。（出题：人力资源和社会保障部）'
    document.getElementById('ans1').innerHTML = 'A．纳入养老保险基金'
    document.getElementById('ans2').innerHTML = 'B．可以继承'
    document.getElementById('ans3').innerHTML = 'C．自动归零'
    document.getElementById('ans4').innerHTML = '十四条规定，养老保险个人账户不得提前支取，记账利率不得低'
}

function update(){
    // 刷新题目
    info = "共: " + (timu_list.length - 1) + ", 已答: " + times
    document.getElementById('info').innerHTML = info

    index = order[times]
    console.log("times\t", times)
    console.log("index\t", index)

    ans = timu_list[index].ans
    // 显示提干
    tigan = timu_list[index].tigan
    document.getElementById("tigan").innerHTML = tigan
    // 隐藏几个选项
    document.getElementById('ans1').style.display = "none"
    document.getElementById('ans1').style.backgroundColor = "#f3f4f6"
    ans1 = ''
    document.getElementById('ans2').style.display = "none"
    document.getElementById('ans2').style.backgroundColor = "#f3f4f6"
    ans2 = ''
    document.getElementById('ans3').style.display = "none"
    document.getElementById('ans3').style.backgroundColor = "#f3f4f6"
    ans3 = ''
    document.getElementById('ans4').style.display = "none"
    document.getElementById('ans4').style.backgroundColor = "#f3f4f6"
    ans4 = ''
    set_color()
    // 选项延迟出现
    setTimeout(() => {show_options(timu_list[index].options)}, 400);
    // console.log("all_time:\t", timu_list[index].all_time)
    // console.log("right_time:\t", timu_list[index].right_time)
    times++
}


function by_accuracy(){
    // 按错误率出题
    order = []
    console.log("timu_list.length\t", timu_list.length)
    tmp = []
    for (var ind = 0; ind < timu_list.length - 1; ind++){
        tmp.push({'key':ind, 'value': timu_list[ind].accuracy})
    }
    console.log(tmp.sort(compare('value')))
    for (var ind = 0; ind < tmp.length; ind++){
        order.push(tmp[ind].key)
    }
    console.log("order\t", order)
    // 改按钮颜色
    document.getElementById('by_accuracy').style.backgroundColor = "#f0c020"
    document.getElementById('by_random').style.backgroundColor = "#f74e75"
    document.getElementById('by_order').style.backgroundColor = "#f74e75"
    times = 0
    update()
}

function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}

function by_random(){
    // 随机出题
    // index = Math.floor(Math.random()*(timu_list.length-1))
    by_order()
    order.sort(function(){ return 0.5 - Math.random(); }); 
    console.log("order\t", order)
    // 改按钮颜色
    document.getElementById('by_accuracy').style.backgroundColor = "#f74e75"
    document.getElementById('by_random').style.backgroundColor = "#f0c020"
    document.getElementById('by_order').style.backgroundColor = "#f74e75"
    times = 0
    update()
}

function by_order(){
    // 按顺序出题
    order = []
    // console.log("timu_list.length\t", timu_list.length)
    order = Array.from(Array(timu_list.length-1), (v,k) =>k);
    console.log("order\t", order)
    // 改按钮颜色
    document.getElementById('by_accuracy').style.backgroundColor = "#f74e75"
    document.getElementById('by_random').style.backgroundColor = "#f74e75"
    document.getElementById('by_order').style.backgroundColor = "#f0c020"
    times = 0
    update()
}

function show_options(options){
    // 显示选项
    ans1 = options[0]
    ans2 = options[1]
    if(options.length == 3){
        ans3 = options[2]
    }
    if(options.length == 4){
        ans3 = options[2]
        ans4 = options[3]
    }
    document.getElementById('ans1').style.display = "block"
    document.getElementById('ans1').innerHTML = ans1
    document.getElementById('ans2').style.display = "block"
    document.getElementById('ans2').innerHTML = ans2
    if (ans3 != ''){
        document.getElementById('ans3').style.display = "block"
        document.getElementById('ans3').innerHTML = ans3
    }
    if (ans4 != ''){
        document.getElementById('ans4').style.display = "block"
        document.getElementById('ans4').innerHTML = ans4
    }
}

function export_file(){
    var i = 0 // 题号
    var timu_array = []
    for (var ind = 0; ind < timu_list.length; ind++){
        i++
        timu = timu_list[ind]
        // console.log("###timu\t", timu)
        tmp_array = i + "\t\t" + timu.tigan + "\t" + timu.all_time
        timu_array.push(tmp_array)
        timu.options.forEach((opt, j) => {
            if (timu.ans == j) {
                tmp_array = i + "\t1\t" + opt + "\t" + timu.right_time
                timu_array.push(tmp_array)
            } else {
                tmp_array = i + "\t\t" + opt + "\t0"
                timu_array.push(tmp_array)
            }
        })
    }
    filecontent = timu_array.join("\n")

    // var aEle = document.createElement("a");// 创建a标签
    // blob = new Blob([filecontent]); 
    // aEle.download = "timu.txt";// 设置下载文件的文件名
    // aEle.href = URL.createObjectUrl(blob);
    // aEle.click();// 设置点击事件
    let uri = 'data:text/csv;charset=utf-8,\ufeff'+encodeURIComponent(filecontent);
    let link = document.createElement('a');
    link.href = uri;
    link.download = 'atimuout.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function change_color() {
    // 点击隐藏选项时改变字体颜色
    color_flag = !color_flag
    set_color()
}

function set_color() {
    // 点击隐藏选项时改变字体颜色
    if (color_flag == true) {
        document.getElementById('ans1').style.color = "#000000"
        document.getElementById('ans2').style.color = "#000000"
        document.getElementById('ans3').style.color = "#000000"
        document.getElementById('ans4').style.color = "#000000"
        document.getElementById('show').innerHTML="隐藏选项"
    } else {
        document.getElementById('ans1').style.color = "#f3f4f6"
        document.getElementById('ans2').style.color = "#f3f4f6"
        document.getElementById('ans3').style.color = "#f3f4f6"
        document.getElementById('ans4').style.color = "#f3f4f6"
        document.getElementById('show').innerHTML="显示选项"
    }
}

function Timu(tigan, options, ans, all_time, right_time, accuracy, index) {
    this.tigan = tigan;
    this.options = options;
    this.ans = ans;
    this.all_time = all_time;
    this.right_time = right_time;
    this.accuracy = accuracy;
    this.index = index;

    this.update_accuracy = update_accuracy
    function update_accuracy() {
        this.accuracy = this.right_time / this.all_time
    }
}
