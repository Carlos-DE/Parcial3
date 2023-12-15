import React from "react";
import LazyMap, {LazyMarker} from "@/components/Map.lazy";
import { notFound } from "next/navigation";
import { ImageForm } from "@/components/ImageForm";

export default async function Inicio() {
    const urlBase = process.env.NEXTAUTH_URL;

    // const directionResponse = await fetch(`${urlBase}api/directions/65787cd49324c963057952d2`);
    // if (directionResponse.status !== 200) {
    //     return <h1>Direction not found</h1>;
    // }
    // const direction = await directionResponse.json();

    // const mapResponse = await fetch(`${urlBase}api/map/direction/${direction._id}`);
    // if (mapResponse.status !== 200) {
    //     return <h1>Map not found</h1>;
    // }
    // const map = await mapResponse.json();

    const longitud = Number(36.72);
    const latitud = Number(-4.42);

    return (
        <div>
            <h1>Eventos</h1>
            Nombre:
            Codigo Postal:
            Altitud:
            Latitud:
            Imagen del evento:<ImageForm></ImageForm>
            <Button>Guardar evento</Button>
        </div>
    );
}
