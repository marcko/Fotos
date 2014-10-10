/**
 * FotoController
 *
 * @description :: Server-side logic for managing fotoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res){
		return res.view('index',{title:"Begin development of the project photo stock"});
	}

};
