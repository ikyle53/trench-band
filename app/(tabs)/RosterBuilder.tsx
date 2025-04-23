import { useState } from 'react';
import { warbands } from '../data/warbands';
import { Warband, Unit } from '../data/types';
import { Picker } from '@react-native-picker/picker';

const RosterBuilder = () => {
    const [selectedWarbandId, setSelectedWarbandId] = useState<string>('');

    const selectWarband: Warband | undefined = warbands.find(
        (wb) => wb.id === selectedWarbandId
    );

    const availableUnits: Unit[] = selectWarband ? selectWarband.units : [];

    return (
        <Picker
            selectedValue={selectedWarbandId}
            onValueChange={(itemValue) => setSelectedWarbandId(itemValue)}>
            
            <Picker.Item label="Select a Warband" value="" />
            {warbands.map((wb) => (
                <Picker.Item key={wb.id} label={wb.name} value={wb.id} />
            ))}


        </Picker>
    );
};
export default RosterBuilder;
