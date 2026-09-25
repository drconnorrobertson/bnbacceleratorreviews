import Link from "next/link";

export default function IndexLayout({ title, intro, basePath, items, groupBy }) {
  const groups = {};
  items.forEach((i) => {
    const g = groupBy ? groupBy(i) : "All";
    (groups[g] = groups[g] || []).push(i);
  });
  const keys = Object.keys(groups).sort();
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-blue-100">{intro}</p>
          <p className="mt-4 text-sm text-blue-200">
            BnB Accelerator owns and controls this website. Content is educational, not advice.
          </p>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
          {keys.map((k) => (
            <div key={k}>
              {groupBy && <h2 className="text-2xl font-bold text-gray-900 mb-4">{k}</h2>}
              <ul className="grid gap-4 sm:grid-cols-2">
                {groups[k].map((i) => (
                  <li key={i.slug} className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                    <Link href={`${basePath}/${i.slug}`} className="font-semibold text-gray-900 hover:text-blue-600">
                      {i.title}
                    </Link>
                    <p className="mt-2 text-sm text-gray-600">{i.excerpt}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
