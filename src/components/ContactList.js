import ContactItem from "./ContactItem";

function ContactList({contacts}) {
  const contactItems = contacts.map((contact) => {
    return <ContactItem key={contact.id} name={contact.name} />;
  });
  return (
    <nav>
      <h2>Contacts</h2>
      <ul className="contacts">{contactItems}</ul>
    </nav>
  );
}

export default ContactList;