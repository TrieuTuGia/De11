const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const message = document.getElementById("message");
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const keyword = searchInput.value.trim();
    if (keyword === "") {
        message.className = "message-error";
        message.innerHTML = "Vui lòng nhập từ khóa trước khi tìm kiếm!";
        searchInput.focus();
        return;
    }
    if (keyword.length < 2) {
        message.className = "message-error";
        message.innerHTML ="Từ khóa phải có ít nhất 2 ký tự!";
        searchInput.focus();
        return;
    }
    message.className = "message-success";
    message.innerHTML = 'Đã tìm kiếm từ khóa: "' + keyword + '"';
});
searchInput.addEventListener("input", function() {
    message.innerHTML = "";
    message.className = "";
});
