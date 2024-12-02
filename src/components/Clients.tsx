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
    <section className="py-section bg-gray-light">
      <div className="max-w-content mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Our Clients</h2>
          <p className="text-secondary-light">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
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