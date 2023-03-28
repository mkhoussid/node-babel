import express from 'express';

const router = express.Router();

router.get('/health', (request, response) => {
	return response.json({ msg: 'OK' });
});

export default router;
