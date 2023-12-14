const PrimaryCard = ({ title, id }) => {
  return (
    <li className="flex gap-2">
      <p>{title}</p>
      <p>{id}</p>
    </li>
  );
};

export default PrimaryCard;
