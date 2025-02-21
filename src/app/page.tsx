import Layout from "@/components/Layout/Layout";


export default function Home() {
  return (
    <Layout >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Hello, World!</h1>
        <p className="mt-4">
          This is a Next.js starter template with Tailwind CSS and TypeScript.
        </p>
      </div>
    </Layout>
  );
}
