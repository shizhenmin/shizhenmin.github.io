

person_list = []
// ans = ''
// order = []
// times = 0
// index = times
// wrong_flag = 0
// color_flag = true

function main(){
    // 主程序
    // 读取输入文件
    // document.getElementById("info").innerHTML = "Hello JavaScript";
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'list.txt', false) // 文件路径
    xhr.overrideMimeType("text/html;charset=utf-8") // 默认为utf-8
    xhr.send(null)
    // 获取文件信息(得到的数据是String)
    // console.log(xhr.responseText)
    parse_txt(xhr.responseText)
}

function Person(name, id, sfz, zb) {
    this.name = name;
    this.id = id;
    this.sfz = sfz;
    this.zb = zb;
}

function by_order(){
    var search_str = document.getElementById('input').value
    // document.getElementById("info").innerHTML = val
    let result = ''
    for (var ind = 0; ind < person_list.length - 1; ind++){
        if (search_str == person_list[ind].name){
            console.log("search_str", search_str)
            console.log("person_list[ind]", person_list[ind])
            console.log("person_list[ind].name", person_list[ind].name)
            result = result + "姓名: " + person_list[ind].name + "\n"
            result = result + "党员编号: " + person_list[ind].id + "\n"
            result = result + "身份证号码: " + person_list[ind].sfz + "\n"
            result = result + "现所在支部: " + person_list[ind].zb + "\n\n"
        }
    }
    // document.getElementById("info").innerHTML = result
    alert(result)

}

function parse_txt(content){
    // person_list = []
    let code = content.split(/\n/); // 根据换行或者回车进行识别
    var name = ''
    code.forEach((line, index) => {
        // console.log("line", line)
        let item = line.split(/\t/)
        // console.log("item", item)
        name = item[0]
        id = item[1]
        sfz = item[2]
        zb = item[3]
        var person=new Person(name, id, sfz, zb)
        person_list.push(person)
        // console.log("person", person)
    })
}















