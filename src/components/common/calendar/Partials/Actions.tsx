import { motion } from 'framer-motion';
import '../App.css';

interface ActionProps {
  date: any;
}
const Actions = (props: ActionProps) => {
  const { date } = props;
  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
    >
      <p className="text-center">{date.toDateString()}</p>
    </motion.div>
  );
};

export default Actions;
