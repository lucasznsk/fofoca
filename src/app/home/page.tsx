export default async function Page() {
  const fofoca = async () => {
    await fetch('/api/example', {
      method: 'GET',
    });
  };
  console.log('fofoca', fofoca);
  return <h1></h1>;
}
