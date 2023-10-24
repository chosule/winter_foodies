const NearbyPage = ({ nearbyData }) => {
  console.log("nearby", nearbyData);

  return (
    <div>
      {nearbyData?.map((nearby) => (
        <div key={nearby.id}>{nearby.name}</div>
      ))}
    </div>
  );
};

export default NearbyPage;
