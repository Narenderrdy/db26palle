var Hat = require('../models/Hat');

// List of all Hat
exports.Hat_list = async function (req, res) {
    try {
        theHats = await Hat.find();
        res.send(theHats);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS 
// Handle a show all view 
exports.Hat_view_all_Page = async function (req, res) {
    try {
        theHats = await Hat.find();
        res.render('Hat', { title: 'Hats Search Results', results: theHats });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// for a specific Hat.  
exports.Hat_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Hat.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Hat create on POST. 
exports.Hat_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Hat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
    document.material = req.body.material;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

//Handle Hat delete on DELETE. 
exports.Hat_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Hat.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

//Handle Hat update form on PUT. 
exports.Hat_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Hat.findById(req.params.id)
        // Do updates of properties 
        if (req.body.brand)
            toUpdate.brand = req.body.brand;
        if (req.body.material) toUpdate.material = req.body.material;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};
// Handle a show one view with id specified by query 
exports.Hat_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Hat.findById(req.query.id)
        res.render('Hatdetail',
            { title: 'Hat Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a Hat. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Hat_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Hatcreate', { title: 'Hat Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a costume. 
// query provides the id 
exports.Hat_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Hat.findById(req.query.id)
        res.render('Hatupdate', { title: 'Hat Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query 
exports.Hat_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Hat.findById(req.query.id)
        res.render('Hatdelete', {
            title: 'Hat Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};