const clients = [
  "Company One",
  "Company Two",
  "Company Three",
  "Company Four",
  "Company Five",
  "Company Six",
];

const Clients = () => {
  return (
    <section className="py-12 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 mb-8">
          Trusted by leading companies worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={`https://picsum.photos/200/100?random=${client}`}
                alt={client}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;