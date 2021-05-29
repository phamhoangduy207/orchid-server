'use strict';

const firebase = require('../db');
const Orchid = require('../models/orchid');
const firestore = firebase.firestore();

const addOrchid = async(req, res, next) => {
    try{
        const data = req.body;
        await firestore.collection('orchids').doc().set(data);
        res.send('Record saved successfuly');
    }
    catch(error){
        res.status(400).send(error.message);
    }
}

const getAllOrchids = async (req, res) => {
    try{
        const orchids = await firestore.collection('orchids');
        
        const data = await orchids.get();
        const orchidsArray = [];
        if (data.empty){
            res.status(404).send('No account record found');
        }
        else{
            data.forEach(element => {
                console.log(element)
                const orchild = new Orchid(
                    element.id,
                    element.data().category,
                    element.data().description,
                    element.data().humidity,
                    element.data().intermediate,
                    element.data().location,                   
                    element.data().name,
                    element.data().url_m,
                    element.data().science_name,                   
                    element.data().warm,
                    element.data().note
                );
                orchidsArray.push(orchild);
            });
            res.send(orchidsArray);
        }
    }
    catch(error){
        res.status(400).send(error.message);
    }
}
const getOrchid = async(req, res, next) => {
    try{
        const id = req.params.orchid_id;
        const account = await firestore.collection('orhcids').doc(id);
        const data = await account.get();
        if (!data.exists){
            res.status(404).send('Orchid with the given ID not found');
        }else{
            res.send(data.data());
        }
    }
    catch(error){
        res.status(400).send(error.message);
    }
}

const updateOrchid = async(req, res, next) => {
    try{
        const id = req.params.orchid_id;
        const data = req.body;
        const account = await firestore.collection('orchids').doc(id);
        await account.update(data);
        res.send('Orchid record updated successfuly');
    }
    catch(error){
        res.status(400).send(error.message);
    }
}

const deleteOrchid = async(req, res, next) => {
    try{
        const id = req.params.orchid_id;
        await firestore.collection('orchids').doc(id).delete();
        res.send('Record deleted successfuly');
    }
    catch(error){
        res.status(400).send(error.message);
    }
}
module.exports = {
    addOrchid,
    getAllOrchids,
    deleteOrchid,
    updateOrchid,
    getOrchid
}