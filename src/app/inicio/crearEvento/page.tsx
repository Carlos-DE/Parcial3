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

    return (
        <div>
            <h1>Eventos</h1>
            <form action="#" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    <br>

    <label for="codigoPostal">Codigo Postal:</label>
    <input type="text" id="codigoPostal" name="codigoPostal" required>
    <br>

    <label for="altitud">Altitud:</label>
    <input type="text" id="altitud" name="altitud" required>
    <br>

    <label for="latitud">Latitud:</label>
    <input type="text" id="latitud" name="latitud" required>
    <br>

    <label for="imagenEvento">Imagen del evento:</label>
    <ImageForm></ImageForm>
    <br>

    <input type="submit" value="Guardar evento">
  </form>
        </div>
    );
}
