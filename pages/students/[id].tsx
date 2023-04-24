import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Student {
  id: string;
  name: string;
}

const students: Student[] = [
  { id: '1', name: 'Paolo veliz' },
  { id: '2', name: 'pablo Isaac' },
  { id: '3', name: 'Alejandra Santos' },
  { id: '4', name: 'Alison Ramos' },
  { id: '5', name: 'Jeffrey reyes' },
];

export default function StudentPage() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState<string>('');

  useEffect(() => {
    if (id) {
      const student = students.find(s => s.id === id);
      if (student) {
        setName(student.name);
      } else {
        // Mandar a 404
        router.push('/404');
      }
    }
  }, [id]);

  return (
    <section>
      <h1>Student {id}</h1>
      <h2>{name}</h2>
    </section>
  );
}
