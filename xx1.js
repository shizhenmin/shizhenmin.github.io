function choose_ans(button) {
    user_ans = button.getAttribute("value")
    console.log(user_ans)
    if (user_ans == ans){
        console.log('True')
        update()
    }else{
        console.log('False')
    }
}

timu_list = []
ans = ''

times = 0

function main(){
    const input = document.querySelector('input[type=file]')
    input.addEventListener('change', ()=>{
      const reader = new FileReader()
      reader.readAsText(input.files[0],'utf8') // input.files[0]为第一个文件
      reader.onload = ()=>{
        // document.body.innerHTML += reader.result  // reader.result为获取结果
        parse_txt(reader.result)
        document.getElementById('input').style.display = "none"
        update()
      }
    }, false)
}

function update(){
    // 刷新题目
    // console.log(times)
    index = times
    index = Math.floor(Math.random()*timu_list.length)
    // index = 385
    console.log(index)
    ans = timu_list[index].ans
    // 显示提干
    tigan = timu_list[index].tigan
    document.getElementById("tigan").innerHTML = tigan
    // 隐藏几个选项
    document.getElementById('ans1').style.display = "none"
    ans1 = ''
    document.getElementById('ans2').style.display = "none"
    ans2 = ''
    document.getElementById('ans3').style.display = "none"
    ans3 = ''
    document.getElementById('ans4').style.display = "none"
    ans4 = ''
    // 选项延迟出现
    setTimeout(() => {show_options(timu_list[index].options)}, 300);
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
    times++
}

function parse_txt(content){
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
            i++
            options.push(item[2])
            if(item[1] == 1){
                ans = i
            }
        }else{ // 新的题目
            // console.log("new timu")
            // console.log("str", str, "number", number)
            if(number != 0){
                var timu=new Timu(tigan, options, ans);
                timu_list.push(timu)
                // console.log(timu)
            }
            number = str
            i = 0
            tigan = item[2]
            options = []
        }
    })
    // 补上最后一题
    var timu=new Timu(tigan, options, ans);
    timu_list.push(timu)
    // console.log(timu)
}

function Timu(tigan, options, ans)
{
    this.tigan = tigan;
    this.options = options;
    this.ans = ans;
}
