function ContactItem({name}) {
  return (
    <li className="contact">
      <div className="icon">{name[0]}</div>
      {name}
    </li>
  );
}

export default ContactItem;