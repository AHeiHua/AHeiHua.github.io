// 在文件中添加以下代码
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('儿子');
        });
    }
});