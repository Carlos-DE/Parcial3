import React from "react";
import LazyMap, {LazyMarker} from "@/components/Map.lazy";
import { notFound } from "next/navigation";
import { ImageForm } from "@/components/ImageForm";
import { RouteContext } from "@/lib/route";

interface RouteParams {
    id: string
}


export default async function Inicio(context: RouteContext<RouteParams>) {
    const urlBase = process.env.NEXTAUTH_URL;

     const directionResponse = await fetch(`${urlBase}api/directions/{context.params.id}}`);
     if (directionResponse.status !== 200) {
         return <h1>Direction not found</h1>;
     }
     const direction = await directionResponse.json();

    // const mapResponse = await fetch(`${urlBase}api/map/direction/${direction._id}`);
    // if (mapResponse.status !== 200) {
    //     return <h1>Map not found</h1>;
    // }
    // const map = await mapResponse.json();

    const longitud = Number(36.72);
    const latitud = Number(-4.42);

    return (
        <div>
            <h1>InicioPage</h1>
            <ImageForm></ImageForm>

            <p>Aqui tienes la dirección:</p>

            <div style={{height: "500px"}}>
                <LazyMap center={[longitud, latitud]} zoom={15}>
                    <LazyMarker position={[longitud, latitud]}></LazyMarker>
                    <LazyMarker position={[longitud + 0.005, latitud]}></LazyMarker>
                </LazyMap>
            </div>
        </div>
    );
}
