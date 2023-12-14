const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
   const allTagData = await Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }]
   })
   res.status(200).json(allTagData);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async  (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const allTagData = await Tag.findOne({
      where: {id: req.params.id}, 
      attributes: ['id', 'tag_name'],
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    })
  
    res.status(200).json(allTagData);
  } catch (error) {
    res.status(500).json(error) 
  }
});

router.post('/', async  (req, res) => {
  // create a new tag
  try {
    const allTagData = await Tag.create({
      tag_name: req.body.tag_name
    })
    res.status(200).json(allTagData);
  } catch (error) {
    res.status(500).json(error)  
  }
});

router.put('/:id', async  (req, res) => {
  // update a tag's name by its `id` value
  try {
    const allTagData = await Tag.update({
      where: { id: req.params.id}
    })
    
    res.status(200).json(allTagData);
  } catch (error) {
    res.status(500).json(error)   
  }
});

router.delete('/:id', async  (req, res) => {
  // delete on tag by its `id` value
  try {
    const allTagData = await Tag.destroy({
      where: { id: req.params.id}
    })
    
    res.status(200).json(allTagData);
  } catch (error) {
    res.status(500).json(error)  
  }
});

module.exports = router;
