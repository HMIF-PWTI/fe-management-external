import gerigi from "assets/gerigi.png";

const VideoProfilePages = () => {
  return (
    <div className="relative bg-white px-36 py-10 min-h-[500px] flex items-center justify-center overflow-hidden">
      <img
        src={gerigi}
        alt="Gerigi"
        className="absolute left-0 top-0 h-96 w-auto object-cover"
      />
      <div className="grid grid-cols-2 gap-16 bg-white border-2 border-primary2 rounded-2xl p-10 w-full">
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-4xl font-bold text-primary2">Vidio Profil</h1>
          <p className="text-sm text-gray-800 text-justify leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="text-sm">
            <p>#MajuSolidJaya</p>
            <p>#KerjaKerasKerjaCerdasKerjaIkhlas</p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <iframe
            width="500"
            height="250"
            src="https://www.youtube.com/embed/OFfpeRQpo4U"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoProfilePages;
