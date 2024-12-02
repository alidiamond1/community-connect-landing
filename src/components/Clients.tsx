const clients = [
  "Logo 1",
  "Logo 2",
  "Logo 3",
  "Logo 4",
  "Logo 5",
  "Logo 6",
  "Logo 7",
];

const Clients = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
          <p className="text-gray-600">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
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