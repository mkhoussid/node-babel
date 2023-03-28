import express from 'express';
import userRoutes from './routes/user';

const app = express();

app.use(userRoutes);

const PORT = process.env.PORT || 3031;

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
