let elContactForm = $(".js-contact-form");
let elContactName = $(".js-contact-name", elContactForm);
let elContactSurname = $(".js-contact-surname", elContactForm);
let elContactRelationship = $(".js-contact-relationship", elContactForm);
let elContactTelephone = $(".js-contact-telephone", elContactForm);

let elContactList = $(".js-contacts-list");

let array = [];

let renderContacts = function() {
  elContactList.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    let name = document.createElement("p");
    let surname = document.createElement("p");
    let relation = document.createElement("p");
    let pForTelepgone = document.createElement("p");
    let telephone = document.createElement("a");

    pForTelepgone.appendChild(telephone)

    li.setAttribute('class', 'list-group-item w-50 d-block mx-auto mb-5 shadow bg-gradient')
    name.setAttribute('class', 'text-success text-center')
    surname.setAttribute('class', 'text-danger text-center')
    relation.setAttribute('class', 'text-info text-center ' )
    pForTelepgone.setAttribute('class', 'text-center ' )

    name.textContent = elContactName.value.trim();
    surname.textContent = elContactSurname.value.trim();
    relation.textContent = elContactRelationship.value.trim();
    telephone.textContent = elContactTelephone.value.trim();

    telephone.href = `tel: ${telephone}`

    li.append(name, surname, relation, pForTelepgone);
    
    elContactList.appendChild(li);
  }
}

elContactForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let contactName = elContactName.value.trim();
  let contactSurname = elContactSurname.value.trim();
  let contactRelationship = elContactRelationship.value.trim();
  let contactTelephone = elContactTelephone.value.trim();

  let contactPerson = {
    name: contactName,
    surname: contactSurname,
    relationship: contactRelationship,
    telephone: contactTelephone,
  }

  array.push(contactPerson);

  renderContacts();
})