export const Todo = () => {
  return (
    <>
      <div className="border border-amber-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6 max-w-md bg-white ">
        <img src="https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg" alt="react_img" className="w-full h-52 object-cover rounded-xl mb-4" />
        <h1 className="text-3xl text-center text-amber-700 font-bold mb-2 tracking-wide">Prince Kumar</h1>
        <p className="text-justify text-gray-700 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, nesciunt numquam rerum, hic veniam dicta pariatur accusantium, placeat modi deserunt quidem ad adipisci facere sint!</p>
        <audio controls className="w-full rounded-lg filter invert brightness-75">
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
};
