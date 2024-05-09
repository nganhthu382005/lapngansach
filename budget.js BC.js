function submit() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var number4 = document.getElementById("number4").value;
    var tongcong = stringToNumber(number1) +  stringToNumber(number2) +  stringToNumber(number3) +  stringToNumber(number4);
    document.getElementById("ketquavb").innerHTML =  `
    <div id="ketqua">
            Mục chi tiêu: <b>${number1}</b><br/>
            Số Tiền: <b>${number2}</b><br/>
            Nhu cầu thiết yếu: <b>${number3}</b><br/>
            Đầu tư: <b>${number4}</b><br/>
            <b>Tổng cộng <b/>: ${tongcong}
        </div>
    `;
};
function stringToNumber(str) {
    const num = parseFloat(str);
    return isNaN(num) ? 0 : num;
}