import axios from "axios";
import moment from "moment";
import React, { useState, useEffect } from "react";

const limitarDescripcion = (descripcion) => {
    const words = descripcion.split(" ");
    if (words.length > 19) {
        return words.slice(0, 19).join(" ") + "...";
    } else {
        return descripcion;
    }
};

const getNombreCreador = (idCreador, users) => {
    const user = users.find((user) => idCreador === user.id);
    if (user) {
        return user.nombre_usuario;
    } else {
        return "username";
    }
};

const darLike = (planId, usuarioId, setLikedPlans) => {
    axios
        .post(`http://localhost:8080/likes/${planId}/${usuarioId}`)
        .then((response) => {
            const respuesta = response.data.message;
            console.log("respuesta de darLike:" + response.data.message);
            if (respuesta === "true") {
                // Actualizar el estado de likedPlans solo si se dio like correctamente
                console.log(response);
                setLikedPlans((prevLikedPlans) => [
                    ...prevLikedPlans,
                    planId,
                ]);
                return axios.post(
                    `http://localhost:8080/planes/liked/${planId}`
                );
            } else {
                return quitarLike(planId, usuarioId, setLikedPlans);
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

const quitarLike = (planId, usuarioId, setLikedPlans) => {
    axios
        .delete(`http://localhost:8080/likes/unlike/${planId}/${usuarioId}`)
        .then((response) => {
            const respuesta = response.data.message;
            console.log("respuesta de quitarLike:" + response.data.message);
            if (respuesta === "true") {
                // Actualizar el estado de likedPlans solo si se quitó el like correctamente
                console.log(response);
                setLikedPlans((prevLikedPlans) =>
                    prevLikedPlans.filter(
                        (likedPlan) => likedPlan !== planId
                    )
                );
                return axios.delete(
                    `http://localhost:8080/planes/liked/${planId}`
                );
            } else {
                return darLike(planId, usuarioId, setLikedPlans);
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

const unirsePlan = (planId, usuarioId, setAddedPlans) => {
    axios
        .post(`http://localhost:8080/participantes/${planId}/${usuarioId}`)
        .then((response) => {
            const respuesta = response.data.message;
            console.log("respuesta de unirse:" + response.data.message);
            if (respuesta === "true") {
                // Actualizar el estado de likedPlans solo si se dio like correctamente
                console.log(response);
                setAddedPlans((prevAddedPlans) => [
                    ...prevAddedPlans,
                    planId,
                ]);
                return axios.post(
                    `http://localhost:8080/planes/add/${planId}`
                );
            } else {
                return quitarsePlan(planId, usuarioId, setAddedPlans);
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

const quitarsePlan = (planId, usuarioId, setAddedPlans) => {
    axios
        .delete(
            `http://localhost:8080/participantes/quit/${planId}/${usuarioId}`
        )
        .then((response) => {
            var respuesta = response.data.message;
            console.log(
                "respuesta de quitarsePlan:" + response.data.message
            );
            if (respuesta === "true") {
                console.log(
                    "--------------quitarsePlan---------------------"
                );
                setAddedPlans((prevAddedPlans) =>
                    prevAddedPlans.filter((id) => id !== planId)
                );
                return axios.post(
                    `http://localhost:8080/planes/quit/${planId}`
                );
            } else {
                unirsePlan(planId, usuarioId, setAddedPlans);
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

const getRandomImage = async () => {
    try {
        const countRes = await axios.get("https://picsum.photos/v2/list");
        const count = countRes.data.length;
        const randomIndex = Math.floor(Math.random() * count);
        const randomRes = await axios.get(
            `https://picsum.photos/id/${randomIndex}/info`
        );
        const randomImage = randomRes.data.download_url;
        return randomImage;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const FuncionesPlan = () => {
    const usuarioId = sessionStorage.getItem("id");
    const [addedPlans, setAddedPlans] = useState([]);
    const [likedPlans, setLikedPlans] = useState([]);

    useEffect(() => {
        // Lógica adicional que necesites realizar con useEffect
    }, []);

    return null; // Puedes devolver algo más significativo aquí si es necesario
};

export {
    FuncionesPlan,
    limitarDescripcion,
    getNombreCreador,
    darLike,
    quitarLike,
    unirsePlan,
    quitarsePlan,
    getRandomImage,
};
