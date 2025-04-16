import { cookies } from "next/headers"; // Access cookies in server components
import Link from "next/link";
import { redirect } from "next/navigation"; // Server-side redirection

const page = async () => {
  const sessionCookie = (await cookies()).get("session"); // Get session cookie

  if (!sessionCookie) {
    redirect("/"); // Redirect to login page if no session
  }

  return (
    <section className="py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="py-3 text-3xl text-center gradiant-text uppercase">Invoices</h1>
          <Link href='/invoice?operation=new'>
          <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-2xl font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg shadow-2xl">
            New Invoice
          </button>
          </Link>
        </div>
        <div className="mt-5 bg-white shadow-2xl rounded-lg p-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  
                  <th>ID</th>
                  <th>Site</th>
                  <th>Date</th>
                  <th className="w-40">Modify</th>
                  <th className="w-40">Use Template</th>
                  <th className="w-40">Download</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  
                  <td>
                    <p className="text-bold text-xl">0001</p>
                  </td>
                  <td>
                    
                    <strong>Sonmarg, Kashmir</strong>
                  </td>
                  <td>12-Mar-2025</td>
                  <th>
                    <Link href="/invoice?operation=edit&id=0001">
                    <button className="btn button-style">Edit</button>
                    </Link>
                  </th>
                  <th>
                    <button className="btn button-style">Use</button>
                  </th>
                  <th>
                    <button className="btn button-style">Download</button>
                  </th>
                </tr>
                
              </tbody>
              {/* foot */}
              
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
