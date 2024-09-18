import Publication from '../models/Publication.js';

// Create a new publication
const createPublication = async (req, res) => {
  try {
    const publication = new Publication(req.body);
    await publication.save();
    res.status(201).json(publication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all publications
const getAllPublications = async (req, res) => {
  try {
    const publications = await Publication.find().populate('faculty');
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get publication by ID
const getPublicationById = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.publicationId).populate('faculty');
    if (!publication) return res.status(404).json({ message: 'Publication not found' });
    res.status(200).json(publication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a publication
const updatePublication = async (req, res) => {
  try {
    const publication = await Publication.findByIdAndUpdate(
      req.params.publicationId,
      { $set: req.body },
      { new: true }
    );
    if (!publication) return res.status(404).json({ message: 'Publication not found' });
    res.status(200).json(publication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a publication
const deletePublication = async (req, res) => {
  try {
    const publication = await Publication.findByIdAndDelete(req.params.publicationId);
    if (!publication) return res.status(404).json({ message: 'Publication not found' });
    res.status(200).json({ message: 'Publication deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export{createPublication,getAllPublications,getPublicationById,updatePublication,deletePublication}
