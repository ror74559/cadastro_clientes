const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const ClientModel = require('../models/ClientModel');

const retrieveClient = async(req,res)=>{
	
	try{
		
		
		const cliente = await ClientModel.find();

		console.log(cliente)
		
		
		res.send({
			clientes:cliente
		});


	}catch(error){
		res.status(500).send(req.params);

	}


};

const create = async(req,res)=>{
	
	try{
		const cliente = new ClientModel(req.body);
		await cliente.save();
		res.send(cliente);

	}catch(error){
		res.status(500).send(error);

	}


};

const remove = async(req,res)=>{
	
	try{
		const cliente =  await ClientModel.findOneAndDelete({_id:req.params.id})
		if(!cliente){
			res.status(404).send("Documento não encontrado na coleção");
		}
		res.status(200).send("Documento deletado");
		
		

	}catch(error){
		res.status(500).send(error);

	}


};

const update = async(req,res)=>{
	
	try{
		const cliente =  await ClientModel.findOneAndUpdate({
			_id:req.params.id},req.body,
			{new:true
			});

		res.send(cliente);
		

	}catch(error){
		res.status(500).send(error);

	}


};

module.exports = {retrieveClient,create,remove,update};







