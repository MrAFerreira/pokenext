import Link from 'next/link';

const page = ({ params }: { params: any }) => {
  console.log(params.id);
  return (
    <div>
      <Link href="/">Back to home</Link>
      <h1>{params.id}</h1>
    </div>
  );
};

export default page;
