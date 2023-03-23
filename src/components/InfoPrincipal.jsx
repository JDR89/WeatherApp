import { Info } from "./Info";

export const InfoPrincipal = ({clima, isLoading}) => {

    const date = new Date(clima.fecha * 1000);
  const formattedDate = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: '2-digit',
  });

  return (
    <>
      <div className="col-8 colorTexto p-5">
        <h1>Clima app</h1>

        <div className="margen">

        <Info clima={clima} formattedDate={formattedDate} isLoading={isLoading}/>

        </div>
      </div>
    </>
  );
};
