export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 pt-40 pb-10">
        <h3 className="font-extrabold text-4xl">One app for all your travel planning needs</h3>
        <p className="text-base">
          Create detailed itineraries, explore user-shared guides, and manage your bookings seamlessly —
          all in one place.
        </p>

        <div>
          <button className="py-4 px-8 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Start Planning
          </button>
        </div>
      </div>
    </div>
  );
}
