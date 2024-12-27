import { Button } from "@nextui-org/button";

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
          <Button>Start Planning</Button>
        </div>
      </div>
    </div>
  );
}
