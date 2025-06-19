interface MemberCardProps {
  image: string;
  position: string;
  name: string;
}

const MemberCard = ({ image, position, name }: MemberCardProps) => {
  return (
    <div className="w-full max-w-xs">
      <div className="flex flex-col shadow-2xl items-center space-y-6 p-5 h-96 rounded-xl bg-white">
        <div className="w-48 h-56 flex items-center justify-center">
          <img
            src={image}
            className="rounded-xl w-full h-full object-cover"
            alt={name}
          />
        </div>
        <div className="flex flex-col items-center text-center justify-center">
          <h1 className="text-primary2 text-lg font-bold">{position}</h1>
          <h1 className="text-primary2">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;