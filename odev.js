//Creating modal element
const $modalElement = document.createElement("div");
$modalElement.setAttribute("id", "modalcontainer");
document.body.appendChild($modalElement);

window.mockApiUrl = "https://5ff1a6afdb1158001748b300.mockapi.io/pets/";

window.removePet = (id) => {
  fetch(`${window.mockApiUrl}${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  }).then((resp) => {
    window.location.reload();
  });
};

window.modalClose = () => {
  console.log("asdasd");
  document.getElementById("backdrop").style.display = "none";
  document.getElementById("exampleModal").style.display = "none";
  document.getElementById("exampleModal").className += document
    .getElementById("exampleModal")
    .className.replace("show", "");

};


window.generateDetailModal = (pet) => {
  return `<div class="modal fade" id="exampleModal${pet.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${pet.name}</h5>
        <button type="button" class="btn btn-secondary" onclick="modalClose()">Close</button>
      </div>
      <div class="modal-body">
        <img src=${pet.image} class="card-img-top">
        <p>${pet.description}</p>
      </div>
      
    </div>
  </div>
</div>`;
};


window.openPetDetail = (id) => {
  fetch(`${window.mockApiUrl}${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      const petModalHtml = generateDetailModal(data);
      document.querySelector("body").innerHTML += petModalHtml;
      $(`#exampleModal${id}`).modal("show");
    });
};


