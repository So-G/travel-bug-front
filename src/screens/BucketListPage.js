import WishList from '../components/CountryWishList';

export default function BucketList() {
  return (
    <>
      <h1>Bucket List</h1>
      <div className="grid">
        <section className="cards">
          <WishList />
          {/* {bucket.map((destination) => (
            <div className="card">
              <div className="card_image-container">
                <img
                  className="countrypic"
                  src={destination.background_image}
                  alt={destination.name}
                />
              </div>
              <div className="card_content">
                <div className="card_title">{destination.name}</div>
                <div className="card_info">
                  <p>Book your flight now :{destination.flight}</p>
                </div>
              </div>
            </div>
          ))} */}
        </section>
      </div>
    </>
  );
}
