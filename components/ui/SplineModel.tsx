// components/ui/SplineModel.tsx
import Spline from '@splinetool/react-spline';

export default function SplineModel() {
  return (
    <div className="w-full h-full">
      <Spline
        scene="https://prod.spline.design/2cczYqUUlGrmZ7Fl/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
