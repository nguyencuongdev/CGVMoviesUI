import { Link } from 'react-router-dom';
import './Category.scss';

function Category() {
  return (
    <div className='categorys-container my-3 py-3 border-b border-black'>
      <div className='categorys flex'>
        <div className='categorys-item flex-1 border-r border-black'>
          <Link to='/sites' className='w-full h-full inline-block' />
        </div>
        <div className='categorys-item flex-1 border-r border-black'>
          <Link to='/movies/now-showing' className='w-full h-full inline-block' />
        </div>
        <div className='categorys-item flex-1 border-r border-black'>
          <Link to='/raps/special/gold-class' className='w-full h-full inline-block' />
        </div>
        <div className='categorys-item flex-1 border-r border-black'>
          <Link to='/cinemas/sale' className='w-full h-full inline-block' />
        </div>
        <div className='categorys-item flex-1 border-r border-black'>
          <Link to='/contacts' className='w-full h-full inline-block' />
        </div>
        <div className='categorys-item flex-1 border-r border-black'>
          <Link to='/news-offer' className='w-full h-full inline-block' />
        </div>
        <div className='categorys-item flex-1'>
          <Link to='/regiser' className='w-full h-full inline-block' />
        </div>
      </div>
      <div className={'border-b border-black mt-3'} />
    </div>
  );
}

export default Category;
