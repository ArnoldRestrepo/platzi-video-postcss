window.onload = () => {
    // Change State 
    const SearchContainer = document.querySelector(".Search__container"),
          SearchInput = document.querySelector(".Search__input"),
          Main = document.querySelector(".Main");

    SearchInput.addEventListener("focus",  () => {
        SearchContainer.classList.add("is--focus");
    });
    SearchInput.addEventListener("blur",  () => {
        SearchContainer.classList.remove("is--focus");
    });


}



