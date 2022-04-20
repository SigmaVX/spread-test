import "./styles.css";

let contact = {
  other: {
    thing: {
      email: "old"
    }
  }
};

let badContact = {
  ...contact
};

let newContact = {
  other: {
    ...contact.other,
    thing: {
      ...contact.other.thing
    }
  }
};

let spreadContact = JSON.parse(JSON.stringify(contact));

newContact.other.thing.email = "new";
spreadContact.other.thing.email = "new";

document.getElementById("app").innerHTML = `
<div>
  <h2>Old Email Is:</h2>
  ${contact.other.thing.email}
  <h2>Bad Spread New Email Is:</h2>
  ${contact.other.thing.email}
  <h2>Good Spread New Email Is:</h2>
  ${newContact.other.thing.email}
  <h2>New Email With Stringify Is:</h2>
  ${spreadContact.other.thing.email}
</div>
`;
