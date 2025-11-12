// DOM Elements
const bookmarkBtn = document.getElementById("add-bookmark");
const bookmarkName = document.getElementById("bookmark-name");
const bookmarkUrl = document.getElementById("bookmark-url");
const bookmarkList = document.getElementById("bookmark-list");

document.addEventListener("DOMContentLoaded", loadBookmark);

bookmarkBtn.addEventListener("click", function () {
  const name = bookmarkName.value.trim();
  const url = bookmarkUrl.value.trim();

  if (!name || !url) {
    alert("Please enter both name and URL.");
    return;
  } else {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      alert("Please enter valid URL which include http:// or https://");
      return;
    }

    addBookmark(name, url);
    saveBookmark(name, url);
    bookmarkName.value = "";
    bookmarkUrl.value = "";
  }
});

function addBookmark(name, url) {
  const li = document.createElement("li");
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.textContent = name;
  aTag.target = "_blank";

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", function () {
    bookmarkList.removeChild(li);
    removeBookmarkFromStorage(name, url);
  });

  li.appendChild(aTag);
  li.appendChild(removeButton);

  bookmarkList.appendChild(li);
}

function getBookmarkFromStorage() {
  const bookmarks = localStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookmark(name, url) {
  const bookmarks = getBookmarkFromStorage();
  bookmarks.push({ name, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function removeBookmarkFromStorage(name, url) {
  let bookmarks = getBookmarkFromStorage();
  bookmarks = bookmarks.filter(
    (bookmark) => bookmark.name !== name || bookmark.url !== url
  );
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function loadBookmark() {
  const bookmarks = getBookmarkFromStorage();
  bookmarks.forEach((bookmark) => addBookmark(bookmark.name, bookmark.url));
}
