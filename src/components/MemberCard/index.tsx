const MemberCard = ({ image, position, name }: MemberCardProps) => {
  return (
    <div className="w-full max-w-xs">
      <div className="flex flex-col shadow-2xl items-center space-y-10 p-5 h-96 rounded-xl bg-white">
        <div>
          <img
            src={image}
            className="rounded-xl w-52 object-cover"
            alt={name}
          />
        </div>
        <div className="flex flex-col items-center mt-2 justify-center">
          <h1 className="text-primary2 text-lg font-bold">{position}</h1>
          <h1 className="text-center text-primary2">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
