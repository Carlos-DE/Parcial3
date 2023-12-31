"use client";

import { useEffect, useState } from 'react';
//import Figure from "react-bootstrap/Figure";
import React from "react";
import LazyMap, {LazyMarker} from "@/components/Map.lazy";
import { notFound } from "next/navigation";
import { ImageForm } from "@/components/ImageForm";

interface Eventos {
  _id: string;
  imagen: string;
  nombre: string;
 // lat: number;
  //lon: number;
}

    //si además queremos ver un mapa para cada evento, podemos hacer lo siguiente:
        //si además queremos ver un mapa para cada evento, podemos hacer lo siguiente:
//<div style={{ height: "500px" , width: "500px" }}>
//<LazyMap center={[registration.lon, registration.lat]} zoom={15}>
//<LazyMarker position={[registration.lon, registration.lat]}></LazyMarker>
//</LazyMap>
//</div></> 
//No lo he puesto porque sale este error que sincermanete nunca había visto:
//Application error: a client-side exception has occurred (see the browser console for more information).
//he dejado por ello un ejemplo de un mapa en la página de inicio, que sí funciona. 


function Directions() {
  const [Directions, setDirections] = useState<Eventos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/directions');
        const data = await response.json();
        setDirections(data);
      } catch (error) {
        console.error('Error fetching Directions:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto mt-8 max-w-screen-xl px-4">
      <h2 className="text-2xl font-bold mb-4">Nuestros eventos:</h2>
      <div className="grid gap-4">
        {Directions.map((registration) => (
          <div key={registration._id} className="p-4 border rounded-md">
            <p>Nombre: {registration.nombre}</p>
            <p>Foto:</p><img src={registration.imagen}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Directions;
