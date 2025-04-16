import Invoice from "@/components/Invoice/Invoice";
import { cookies } from "next/headers"; // Access cookies in server components
import { redirect } from "next/navigation"; // Server-side redirection

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  // Await the promise so that you get a plain object
  const sp = await searchParams;

  const sessionCookie = (await cookies()).get("session"); // Get session cookie
  if (!sessionCookie) {
    redirect("/"); // Redirect to login page if no session
  }

  // sp is already a plain object, so you can use Object.entries on it:
  const queryObject = Object.fromEntries(Object.entries(sp));
  if(queryObject.operation !== "new") {

  }
  console.log(queryObject); // Example output: { id: '0001' }

  return (
    <section className="bg-random-image">
      <div className="container mx-auto pt-5">
        <div className=" rounded-4xl bg-gradiant-white p-5">
          {queryObject.operation === "new" && 
            <Invoice isNew={true} data={{}} />
          }
        </div>
      </div>
    </section>
  );
};

export default page;
