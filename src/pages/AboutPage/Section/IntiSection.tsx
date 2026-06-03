import MemberCard from "@/components/MemberCard";
import { intiData } from "@/utils/Dhinakara";

const IntiSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 sm:px-12 lg:px-36 space-y-10 animate-fade-up">
      <h1 className="text-primary2 text-xl lg:text-2xl font-bold uppercase">
        4 INTI
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {intiData.map((person, index) => (
          <div
            key={`${person.name}-${index}`}
            className="h-full flex justify-center animate-card-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <MemberCard {...person} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntiSection;