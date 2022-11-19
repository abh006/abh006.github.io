import {
	collection,
	getDoc,
	getDocs,
	getFirestore,
	orderBy,
	query,
	QueryDocumentSnapshot,
	setDoc,
	type DocumentData,
	type FirestoreDataConverter,
	type SnapshotOptions,
	type WithFieldValue
} from 'firebase/firestore';
import { DateTime } from 'luxon';
import { app } from './firebase';
import type { ThoughtData } from './interfaces';
import { doc } from 'firebase/firestore';

const db = getFirestore(app);
const thoughtsRefName = 'thoughts';

const thoughtConverter: FirestoreDataConverter<ThoughtData> = {
	fromFirestore: (
		snapshot: QueryDocumentSnapshot<DocumentData>,
		_?: SnapshotOptions
	): ThoughtData => {
		const data = snapshot.data() as Omit<ThoughtData, 'createdOn'> & {
			createdOn: { seconds: number };
		};
		return {
			...data,
			createdOn: DateTime.fromSeconds(data.createdOn.seconds).toJSDate()
		};
	},
	toFirestore: (modelObject: WithFieldValue<ThoughtData>): DocumentData => {
		return modelObject;
	}
};

const thoughtsRef = collection(db, thoughtsRefName).withConverter(thoughtConverter);
export const createThought = async ({
	title,
	content,
	message
}: Omit<ThoughtData, 'id'>): Promise<void> => {
	const id = title.replace(' ', '-');
	await setDoc(doc(thoughtsRef, id), {
		id,
		title,
		content,
		message,
		createdOn: new Date()
	});
	console.log(`Created doc with title ${title}`);
};

export const getThoughts = async (): Promise<ThoughtData[]> => {
	const q = query(thoughtsRef, orderBy('createdOn', 'desc'));
	const thoughtSnapshot = await getDocs(q);
	const thoughts: ThoughtData[] = [];
	thoughtSnapshot.forEach((doc) => thoughts.push(doc.data()));
	return thoughts;
};

export const getThought = async (id: string): Promise<ThoughtData> => {
	const d = doc(db, thoughtsRefName, id).withConverter(thoughtConverter);
	const thoughtSnapshot = await getDoc(d);
	return thoughtSnapshot.data() as ThoughtData;
};
