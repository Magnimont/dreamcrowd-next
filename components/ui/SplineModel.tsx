import Spline from '@splinetool/react-spline';

export default function SplineModel() {
  return (
    <div className="relative w-full aspect-square max-w-xl mx-auto">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2cczYqUUlGrmZ7Fl/scene.splinecode"
          style={{ 
            width: '100%', 
            height: '100%',
            background: 'transparent'
          }}
        />
      </div>
    </div>
  );
}