'use client';

import React, { useState, useMemo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const GoogleMapComponent = ({ lat, lng, onAddressSelect }:{
    lat: number,
    lng: number,
    onAddressSelect: (address: string) => void

}) => {
  const center = useMemo(() => ({ lat, lng }), [lat, lng]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

const PlacesAutocomplete = ({ onAddressSelect }:{
    onAddressSelect: (address: string) => void
}) => {
  const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: 'us' } },
    debounce: 300,
    cache: 86400,
  });

  const renderSuggestions = () => data.map(suggestion => {
    const { place_id, structured_formatting: { main_text, secondary_text }, description } = suggestion;
    return (
      <li key={place_id} onClick={() => {
        setValue(description, false);
        clearSuggestions();
        onAddressSelect(description);
      }}>
        <strong>{main_text}</strong> <small>{secondary_text}</small>
      </li>
    );
  });

  return (
    <div>
      <input value={value} disabled={!ready} onChange={(e) => setValue(e.target.value)} placeholder="Enter a location" />
      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};

const ProductForm = () => {
  const [lat, setLat] = useState(37.7749);
  const [lng, setLng] = useState(-122.4194);

  const handleAddressSelect = async (address: any) => {
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setLat(lat);
    setLng(lng);
  };

  return (
    <form className="p-4 bg-white text-black rounded shadow-md ">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Product Name</label>
        <input className="w-full px-3 py-2 border rounded" type="text" name="name" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Category</label>
        <input className="w-full px-3 py-2 border rounded" type="text" name="category" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Description</label>
        <textarea className="w-full px-3 py-2 border rounded" name="description"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Weight</label>
        <input className="w-full px-3 py-2 border rounded" type="text" name="weight" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Price</label>
        <input className="w-full px-3 py-2 border rounded" type="text" name="price" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Nutritional Information</label>
        <textarea className="w-full px-3 py-2 border rounded" name="nutritionalInfo"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Product Code</label>
        <input className="w-full px-3 py-2 border rounded" type="text" name="productCode" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Location</label>
        <PlacesAutocomplete onAddressSelect={handleAddressSelect} />
      </div>
      <GoogleMapComponent lat={lat} lng={lng} onAddressSelect={handleAddressSelect} />
      <button className="w-full bg-black text-white px-3 py-2 rounded mt-4" type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
